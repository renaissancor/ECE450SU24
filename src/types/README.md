## Capstone Project

| Primary Key        | Field        | Type   |
| ------------------ | ------------ | ------ |
| (1-FA, 2-SP, 3-SU) | ProjectID    | Int    |
|                    | Year         | Int    |
|                    | Semester     | Int    |
|                    | Project Name | String |

| Foreign Key | Field             | Type |
| ----------- | ----------------- | ---- |
| FK          | InstructorID#1    | Int  |
| FK          | InstructorID#2    | Int  |
| FK          | InstructorID#3    | Int  |
| FK          | InstructorID#4    | Int  |
| FK          | InstructorID#5    | Int  |
| FK          | SponsorID         | Int  |
| FK          | Group Leader's id | Int  |
| FK          | Group member#1    | Int  |
| FK          | Group member#2    | Int  |
| FK          | Group member#3    | Int  |
| FK          | Group member#4    | Int  |

| File Link | Field           | Type               |
| --------- | --------------- | ------------------ |
| file link | proposal        | String             |
| file link | DR#1            | String             |
| file link | DR#2            | String             |
| file link | DR#3            | String             |
| file link | poster          | String             |
| file link | video-final pre | String             |
| file link | video-expo      | String             |
|           | award           | golden/silver/none |
|           | expense         | Int                |

## Mentor

| Primary Key | Field       | Type                  |
| ----------- | ----------- | --------------------- |
| PK          | MentorID    | Int                   |
|             | name        | String                |
|             | type        | industry/university   |
|             | company     | String (JI or others) |
|             | position    | String                |
|             | contactInfo | String                |

## Company

| Primary Key | Field             | Type   |
| ----------- | ----------------- | ------ |
| PK          | CompanyID         | Int    |
|             | name              | String |
|             | country           | String |
|             | link to home page | String |
|             | Funding           | Int    |

## Student

| Primary Key | Field        | Type        |
| ----------- | ------------ | ----------- |
| PK          | StudentID    | Int         |
|             | name         | String      |
|             | country      | String      |
|             | gender       | F/M         |
|             | major        | ME/ECE/MSE  |
|             | JointProgram | DD/GDP/None |
