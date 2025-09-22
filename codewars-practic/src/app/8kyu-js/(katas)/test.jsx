import answer from './answering'

export const Test = ( ) => {
const answering = answer()
// const answer2 = rps('rock', 'scissors')
console.log('answering',  answering )
// console.log('answering',  answering2 )


return (
<div>
        <div className="bg-amber-300 w-40 h-40  flex  flex-col gap-4  items-center justify-center">
            <p>ANSWER</p>
            <h1 >{ answering }</h1>
            {/* <h1>{ answering2 }</h1> */}
        </div>
</div>
)}
