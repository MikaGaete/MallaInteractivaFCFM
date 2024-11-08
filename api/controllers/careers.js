const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const GetCareers = async (req, res) => {
    try {
        const careers = await prisma.career.findMany();
        res.send(careers);
    }
    catch (error) {
        console.log(error);
        res.status(400).send();
    }
}

const GetCareer = async (req, res) => {
    const {career} = req.params;
    const semesters = {};

    try {
        const {name} = await prisma.career.findUnique({
            where: {
                short: career
            },
            select: {
                name: true
            }
        });

        const courses = await prisma.fullCareer.findMany({
            where: {
                short: career
            },
            select: {
                id: true,
                name: true,
                credits: true,
                semester: true,
                PreRequisites: true,
                color: true
            },
            orderBy: {
                name: 'asc'
            }
        });

        const categories = await prisma.categories.findMany({
            where: {
                short: career
            },
            select: {
                name: true,
                color: true
            }
        });

        for (let i = 0; i < courses.length; i++) {
            // Formatting
            if (courses[i].PreRequisites === null) {
                courses[i].PreRequisites = [];
            }
            else {
                courses[i].PreRequisites = courses[i].PreRequisites.split(',');
            }

            // Grouping
            if (semesters[courses[i].semester] === undefined) {
                semesters[courses[i].semester] = [];
            }
            semesters[courses[i].semester].push(courses[i]);
        }

        res.send({name, semesters, categories});
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

module.exports = {GetCareer, GetCareers}