function isTriangle(a, b, c) {

    if (a < (c + b) && b < (c + a) && c < (a + b))
        return true;
    else
        return false;
}
function getCount(n) {
    let x = n.toString();
    let y = 0;
    if (x.length == 1) {
        return 0
    }
    for (i = 0; i <= x.length; i++) {
        for (j = 0; j < x.length; j++) {
            let t = x.slice(j, i);
            if (n % t == 0)
                y++;
        }
    }
    return y;
}

function findOutlier(integers) {
    //your code here
    var outlier;
    if (integers[0] % 2 == 0 && integers[1] % 2 == 0 || integers[1] % 2 === 0 && integers[2] % 2 === 0 || integers[0] % 2 === 0 && integers[2] % 2 === 0)
        outlier = integers.find(integers => integers % 2 != 0);
    else
        outlier = integers.find(integers => integers % 2 == 0);

    return outlier
}
function comp(array1, array2) {


    var x = false;
    if(array1 && array2){
    if(array1.length!=0){
    array1.sort((a,b)=> a-b);
    array2.sort((a,b)=> a-b);
    for (i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i] || array1[i] == Math.pow(array2[i], 2) || array2[i] == Math.pow(array1[i], 2)) {
            x = true;
        }
        else {
      return false;}
       
    }
    }
    else return true;
    }
    return x;

}



