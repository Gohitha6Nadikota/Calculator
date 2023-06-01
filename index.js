function clearb()
{
   document.getElementById("result").value="";
}
function add(value)
{
    document.getElementById("result").value+=value;
}
function calculates()
{
    document.getElementById("result").value=eval(document.getElementById("result").value);
}
function cleare()
{
    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
}