const answer = () => splitString("ababcbacadefegdehijhklij") //  [4, 3, 2, 1]

function splitString(string) {
  let newArray = []
  let newString = string
  while (newString.length > 0) {
    let sIndex = newString.indexOf(newString[0])
    console.log("sIndex", sIndex)
    let lIndex = newString.lastIndexOf(newString[0])
    console.log("lIndex", lIndex)
    let sub = newString.substring(sIndex, lIndex + 1)
    console.log("sub", sub)
    newArray.push(sub.length)
    console.log("newString before", newString)
    newString = newString.replace(sub, "")
    console.log("newString after", newString)
  }

  // let test = string.indexOf("a")
  // let test2 = string.lastIndexOf("a")
  // console.log("test,test2", test, test2)
  // let test3 = string.substring(test, test2 + 1)
  // console.log("test3", test3)
  // let test4 = string.replace(test3, "")
  // console.log("test4", test4)
  // console.log("string", string)

  return newArray
}
export default answer
