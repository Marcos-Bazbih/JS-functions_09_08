// ***************************_1_****************************
// function missionOne(missionOneArray){
//     newArray=[];
//     for(var i=missionOneArray.length-1; i>=0; i--){
//         newArray.push(missionOneArray[i]);
//     }
//     return newArray;
// }
// mission1Array = [1, 2, 3, 4, 5, 6, 7, 8];
// var result = missionOne(mission1Array);
// console.log(result);
// ***************************_1_****************************



// ***************************_2_****************************
// tenNumArray = [0,5,2,0,0,0,0,0,0,0];
// nineNumArray = [0,3,0,0,0,0,0,0,0];

// function missionTwo(missionTwoArray){
//         if(missionTwoArray.length == 10){
//             missionTwoArray.splice(3,0,"-")
//             missionTwoArray.splice(7,0,"-")
//             return missionTwoArray;
//         }      
//         else if(missionTwoArray.length == 9){
//             missionTwoArray.splice(2,0,"-")
//             missionTwoArray.splice(6,0,"-")
//             return missionTwoArray;
//         }
//         else{
//             return "no"
//         }
//     }
// console.log(missionTwo(nineNumArray));
// console.log(missionTwo(tenNumArray));
// ***************************_2_****************************



// ***************************_3_****************************
// function mostCommon(array){
//     var max=0;
//     var char;
//     for(var i=0; i<array.length;i++){
//         var counter=0;
//         for(var j=i+1; j<array.length;j++){
//             if(array[i] == array[j]){
//                 counter++;
//             }
//             if(counter>max){
//                 max = counter;
//                 char=array[i];
//             }
//         }
//     }
//     return char;
// }
// var numArray=[1,2,3,4,1,5,6,2,2,2,7,7];
// var result = mostCommon(numArray);
// console.log(result);
// ***************************_3_****************************




// ***************************_4_****************************
// function missionFour(missionFour){
//     var fact = 1;
//     for(var i=1; i<=missionFour;i++){
//         fact*=i;
//     }
//     return fact;
// }
// var result = missionFour(4);
// console.log(result);
// ***************************_4_****************************




// ***************************_6_****************************
// var numArray = [5,4,8,1,7,2,6,3];
// var second = [];
// var min;
// function arrays(numArray){
//     numArray.sort();
//     return numArray;
// }
// console.log(arrays(numArray));
// ***************************_6_****************************