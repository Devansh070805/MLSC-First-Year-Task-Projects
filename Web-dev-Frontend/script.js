/*
please ignore the commented parts of code.
was trying different things 
thank you
*/
function store()
{
    if(clc.display2.value=='')
    clc.display2.value=clc.display.value;
    if(clc.display.value==':)')
    clc.display2.value='';
   
  //  if(clc.display2.value==eval(clc.display.value))
    //clc.display2.value='';
}
function output()
{
    let i=0;
   // percenteval(); 

    if(clc.display.value=='')
    clc.display.value=':)';
    clc.display.value=eval(clc.display.value);
  
    historyholder.value+=clc.display2.value+"= ";
    
    historyholder.value+=clc.display.value;



}

function smiley ()
{
    if(clc.display.value=='')
    clc.display.value="Meow";
}


function allclear()
{
    clc.display.value="";
    clc.display2.value="";
}
function deletebtn()
{
    let str=clc.display.value;
    if(eval(clc.display2.value)==clc.display.value)
    {
        clc.display.value=clc.display2.value.substring(0,clc.display2.value.length-1);
        clc.display2.value='';
    }
    else
    {
        str=str.substring(0,str.length-1);
        clc.display.value=str;
    
    }
    
    
}
/* function percentsign()
{
    clc.display.value+='%';
} */

/* function percenteval()
{
    
    let str="/+-*"; let k=0; let flag=0;
    for(let i=0;i<clc.display.value.length;i++)
    if(clc.display.value.charAt(i)=='%')
    flag=1;

let check_for_sign=0; let temp1,temp2=0; let expression=clc.display.value;
if(flag==1)
{
    for(let i=0;i<clc.display.value.length;i++)
    {
     if(str.indexOf(clc.display.value.charAt(i))>=0)
     {
        k++;
     }
    }   
    if(k==0)
    {
     clc.display.value=eval(clc.display.value.substring(0,clc.display.value.length-1))*0.01; 
    }
    else{

        while(check_for_sign==0)
        {
            for(let i=0;i<expression.length;i++)
            {
                if(str.indexOf(expression.charAt(i))>=0)
                {
                      temp1=i;    temp2++;             
                }
                if(expression.charAt(i)=='%' && temp2!=1)
                break;
            if(temp2==1)
            {
                let s;
              let t=expression.substring(0,temp1);
              for(let y=temp1+1;y<expression.length;y++)
              {
                let ch=expression.charAt(y);
                 if(ch!='%')
                 s+=ch;
              else break;
                  }
                  expression=s/100*t;
                  clc.display.value=expression;
            } 
            let l=0;
            let newstore=eval(expression.substring(0,temp1));
            expression=expression.replace(expression.substring(0,temp1),newstore);
            for(let p=0;p<expression.length;p++)
            {
                if(str.indexOf(expression.charAt(i))>=0)
                l++;
            }
            if(l==0)
            {
                check_for_sign=1;
            }


      }
   }
  }
 } */

 
function dblzero()//check karo isko theek se minor bugs
{

 let arithm= ".+-/*"  ; 
 if(clc.display.value!='' && clc.display2.value!='')
 {
     clc.display.value='0';
     clc.display2.value='';
 }
 if(clc.display.value=='0')
 {
    clc.display.value+='';
 }
 if(eval(clc.display.value)==0)
 clc.display.value+='';
 if(clc.display.value=='')
 clc.display.value+='0';

 else if(clc.display.value!='' && arithm.indexOf(clc.display.value.charAt(clc.display.value.length -1))== -1 && clc.display.value!='0')     {
     clc.display.value+="00";
    }
   if(arithm.indexOf(clc.display.value.charAt(clc.display.value.length -1))>=0 )
 {
 clc.display.value+='0';
 }

else
clc.display.value+='';
   
  
}
function zero()
{
    let arithm= "+-/*"  ; 
 
if(clc.display.value!='' && clc.display2.value!='')
{
    clc.display.value='0';
    clc.display2.value='';
}
 if(clc.display.value.charAt(clc.display.value.length -1)!='0' && arithm.indexOf(clc.display.value.charAt(clc.display.value.length -1))== -1)     {
     clc.display.value+="0";
    }
  else if(arithm.indexOf(clc.display.value.charAt(clc.display.value.length -1))>=0 )
 {
 clc.display.value+='0';
 }
   
    else
    clc.display.value+='';
}
function sign1()
{
    let str="+-*/";
    if(clc.display.value=='')
    clc.display.value='';
    if(str.indexOf(clc.display.value.charAt(clc.display.value.length-1))==-1)
    clc.display.value+='/';
else
{
    clc.display.value=clc.display.value.substring(0,clc.display.value.length-1)+"/";
}
}
function sign2()
{
    let str="+-*/";
    if(str.indexOf(clc.display.value.charAt(clc.display.value.length-1))==-1)
    clc.display.value+='*';
else
{
    clc.display.value=clc.display.value.substring(0,clc.display.value.length-1)+"*";
}
}
function sign3()
{
    let str="+-*/";
    if(str.indexOf(clc.display.value.charAt(clc.display.value.length-1))==-1)
    clc.display.value+='+';
else
{
    clc.display.value=clc.display.value.substring(0,clc.display.value.length-1)+"+";
}
}
function sign4()
{
    let str=" + ";
    
    if(str.indexOf(clc.display.value.charAt(clc.display.value.length-1))==-1)
    clc.display.value+='-';
else
{
    clc.display.value=clc.display.value.substring(0,clc.display.value.length-1)+"-";
}
}

function history()
{
    
}

function clrscr()// to clear the screen when new input after pressing equals sign
{
let sign="+-/*";
if(clc.display.value!='' && clc.display2.value!='' && sign.indexOf(clc.display.value.charAt(clc.display.value.length-1) )>=0)
    
     
    {
        
        clc.display2.value='';
    }
    if(clc.display.value!='' && clc.display2.value!='')
    
     
    {
        clc.display.value='';
        clc.display2.value='';
    }
    
}

