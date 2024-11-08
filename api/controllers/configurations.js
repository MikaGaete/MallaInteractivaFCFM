const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const FromFile = async (req, res) => {
    let {career, short, courses, categories} = req.body; courses = JSON.parse(courses); categories = JSON.parse(categories);
    const semesters = Object.keys(courses), careerCategories = Object.keys(categories);
    const coursesToCreate = [], categoryToCreate = [], preRequisitesToCreate = [], linkToCreate = [];

    try {
        const {id} = await prisma.career.upsert({
            where: { name: career }, update: {}, create: { name: career, short }, select: { id: true }
        });

        for (let i = 0; i < careerCategories.length; i++) {
            const color = categories[careerCategories[i]];
            categoryToCreate.push(color);
            linkToCreate.push({ careerId: id, categoryId: color.id });
        }

        for (let i = 0; i < semesters.length; i++) {
            const semester = courses[semesters[i]];
            for (let j = 0; j < semester.length; j++) {
                const course = semester[j];
                const preRequisites = course[4];
                coursesToCreate.push({ id: course[1], name: course[0], credits: course[2], semester: (i + 1), categoryId: course[3]});
                if (preRequisites.length > 0) {
                    for (let k = 0; k < preRequisites.length; k++) {
                        preRequisitesToCreate.push({ courseId: course[1], preCourseId: preRequisites[k] });
                    }
                }
            }
        }

        try {
            await prisma.$transaction([
                prisma.category.createMany({ data: categoryToCreate, skipDuplicates: true }),
                prisma.course.createMany({ data: coursesToCreate, skipDuplicates: true }),
                prisma.preRequisite.createMany({ data: preRequisitesToCreate, skipDuplicates: true }),
                prisma.linkCategoryToCareer.createMany({ data: linkToCreate, skipDuplicates: true })
            ]);

            res.status(201).send();
        }
        catch (error) {
            console.log(error);
            res.status(200).send({ message: 'The operation did not finish correctly' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(200).send({ message: 'The operation did not finish correctly' });
    }
}



module.exports = { FromFile }