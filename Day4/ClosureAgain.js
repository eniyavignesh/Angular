function outer(){
    var a=30

    function inner(){
        console.log("outer a value in inner",a)
        a++
    }
    return inner
}

fun = outer();
fun2 = outer();
fun3 = outer();
fun(); // 30
fun(); // 31
fun(); //32
fun2();//30
fun2();//31
fun3();