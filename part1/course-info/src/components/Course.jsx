import Header from './header'
import Content from './Content'
import Total from './Total'


export default function Course ({course}) {

    const {id, name, parts} = course

    const total = course.parts.reduce((s, part) => s + part.exercises, 0)

    console.log("total", total)

    return (
        <>
        <Header course={name} />
        <Content parts={parts} />
        <Total totalExercises={total} />
        </>
    )
}