function getave(infor){
    var perAve=new Array();
    for(i=0;i<infor.length;i++){
        for(j=1;j<infor[i].length;j++){
            perAve[i]+=infor[i][j];
        }
       // perAve[i]=(infor[i].chinese+infor[i].math+infor[i].english+infor[i].program)/4;
     }
      return perAve;

}
//计算每个人的平均分
//*********************************************************************************** */

function getallave(perAve){
    var allAve=0;
    for(i=0;i<perAve.length;i++){
        allAve+=perAve[i];
    }
    return allAve/(perAve.length);
}
//计算全班总平均分
//***************************************************************************** */
function getperall(infor){
    var perAll=new Array();
    for(i=0;i<infor.length;i++){
        for(j=1;j<infor[i].length;j++){
            perAll[i]+=infor[i][j];
        }
       // perAll[i]=infor[i].chinese+infor[i].math+infor[i].english+infor[i].program
    }
    return perAll;
}
//计算每个人的总分
//******************************************************************** */
function sortNumber(a,b)
{
return a - b
}
//排序函数
function getall(perAve){
    var  allAve=perAve;
    allAve=allAve.sort(sortNumber);
    if(allAve.length%2==0)
    var score=(allAve[allAve.length/2]+allAve[allAve.length/2-1])/2;
    else
    var score=allAve[allAve.length/2];
    return score;
    
}
//计算总分中位数
//***************************************************************************** */
function print(infor){
    var result1="成绩单\n 姓名|语文成绩|英语成绩|数学成绩|编程成绩|平均分|总分";
    var resulr2=0;
    for(i=0;i<infor.length;i++){
        for(j=1;j<infor[i].length;j++){
            result2[i]+=infor[i][j]+"|"
        }
        result2[i]+=getave(infor)[i]+"|"+getperall(infor)[i]+getperall(infor)[i]+"\n";
    //result2+="|"+infor[i].chinese+"|"+infor[i].english+"|"+infor[i].math+"|"+infor[i].program+"|"+getave(infor)[i]+"|"+getperall(infor)[i];
    }
    var result3=getall(getave(infor));
    var result=result1+result2+result3;
    return result;
}
console.log(print(infor));

