
export const digitalRoot = (n: number): number => {
    let string = n.toString()
    let length = string.length
    let answer = 0
    if (length > 1) {
        for (let i = 0; i < length; i++) {
            const digit = Number(string[i])
            answer += digit
        }
    }
    let checkAnswer = answer.toString().length
    if (checkAnswer === 1) {
        return answer
    } else { return digitalRoot(answer) }
};



export const Test = (props: Props) => {
const answer = digitalRoot(153)
console.log('answer',  answer )


return (
<div>
        <div>...Hello, I'm export function expression...</div>
        <h1>{ answer }</h1>
</div>
)}
type Props = {

}