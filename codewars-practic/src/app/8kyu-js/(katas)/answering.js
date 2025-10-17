const answer = () => solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

function solution(list) {
  let draft = []
  let total = []
  let finalArr = []
  let i = 0
  while (i < list.length) {
    if (list[i] - list[i + 1] === -1) {
      draft.push(list[i], list[i + 1])
    } else {
      total.push(draft.length === 0 ? list[i] : [...draft])
      draft = []
    }
    i++
  }

  finalArr = total.forEach(el => {
    console.log("el.length", el.length)

    if (el.length < 2 || typeof el === "number") {
      draft.push(el)
    } else if (el.length < 3) {
      draft = draft.concat(el)
    } else {
      let min = Number(Math.min(...el))
      let max = Number(Math.max(...el))
      let diap = `${min}-${max}`
      draft.push(diap)
    }
  })

  return draft.join()
}
export default answer
