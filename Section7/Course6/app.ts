//generic utility type
interface CourseGoal{
    title: string;
    description: string;
    completeUnit: Date;
}
//partial makes all the parameter at the top makes optional
function createCourseGoal(
    title: string ,
    description: string ,
    date: Date
    ): CourseGoal{
        let courseGoal: Partial<CourseGoal> = {};
        courseGoal.title = title;
        courseGoal.description = description;
        courseGoal.completeUnit = date;
        return courseGoal as CourseGoal; // typecasting
    }
const names: Readonly<string[]>  = ['kaviya','bakiyavel'];
//names.push('jayanthi');
//names.pop('bakiyavel');
//readonly can be used for array or only
//throws error not allows to do pull or push 