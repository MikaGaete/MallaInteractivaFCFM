SELECT
  `Ca`.`short` AS `short`,
  `C`.`id` AS `id`,
  `C`.`name` AS `name`,
  `C`.`credits` AS `credits`,
  `C`.`semester` AS `semester`,
  `MallasFCFM`.`GPR`.`PreRequisites` AS `PreRequisites`,
  `Cat`.`color` AS `color`
FROM
  (
    (
      (
        (
          `MallasFCFM`.`Course` `C`
          JOIN `MallasFCFM`.`LinkCategoryToCareer` `LCTC` ON((`C`.`categoryId` = `LCTC`.`categoryId`))
        )
        JOIN `MallasFCFM`.`Career` `Ca` ON((`Ca`.`id` = `LCTC`.`careerId`))
      )
      JOIN `MallasFCFM`.`Category` `Cat` ON((`C`.`categoryId` = `Cat`.`id`))
    )
    LEFT JOIN `MallasFCFM`.`GroupedPreRequisites` `GPR` ON((`MallasFCFM`.`GPR`.`courseId` = `C`.`id`))
  )