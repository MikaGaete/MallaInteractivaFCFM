SELECT
  `LCTC`.`categoryId` AS `categoryId`,
  `Ca`.`short` AS `short`,
  `C`.`name` AS `name`,
  `C`.`color` AS `color`
FROM
  (
    (
      `MallasFCFM`.`Category` `C`
      JOIN `MallasFCFM`.`LinkCategoryToCareer` `LCTC` ON((`C`.`id` = `LCTC`.`categoryId`))
    )
    JOIN `MallasFCFM`.`Career` `Ca` ON((`Ca`.`id` = `LCTC`.`careerId`))
  )