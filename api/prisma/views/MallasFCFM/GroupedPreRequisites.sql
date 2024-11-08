SELECT
  `MallasFCFM`.`PreRequisite`.`courseId` AS `courseId`,
  GROUP_CONCAT(
    DISTINCT `MallasFCFM`.`PreRequisite`.`preCourseId` SEPARATOR ','
  ) AS `PreRequisites`
FROM
  `MallasFCFM`.`PreRequisite`
GROUP BY
  `MallasFCFM`.`PreRequisite`.`courseId`