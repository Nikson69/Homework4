window.onload = function()
{
    var canvas = document.getElementById('line'); //id canvas
    var obCanvas = canvas.getContext('2d'); //2d рисунок
    
    obCanvas.beginPath(); //используется что бы «начать» серию действий описывающих отрисовку фигуры. Каждый новый вызов этого метода сбрасывает все действия предыдущего и начинает «рисовать» занова.
    obCanvas.lineWidth = 21; //Ширина линии
    obCanvas.strokeStyle = 'red'; //цвет красый
    obCanvas.moveTo(10, 10); //начало точки
    obCanvas.lineTo(10, 140); //конец
    obCanvas.moveTo(10, 70);
    obCanvas.lineTo(50, 70);
    obCanvas.moveTo(50, 10);
    obCanvas.lineTo(50, 140); //Н
    obCanvas.moveTo(90, 10);
    obCanvas.lineTo(90, 140);
    obCanvas.moveTo(90, 140);
    obCanvas.lineTo(140, 10);
    obCanvas.moveTo(140, 10);
    obCanvas.lineTo(140, 140); //И
    obCanvas.moveTo(170, 10);
    obCanvas.lineTo(170, 140);
    obCanvas.moveTo(170, 70);
    obCanvas.lineTo(210, 10);
    obCanvas.moveTo(170, 70);
    obCanvas.lineTo(210, 140);//K
    //obCanvas.moveTo(250, 10);
    //obCanvas.lineTo(250, 140);
    //obCanvas.moveTo(250, 140);
    //obCanvas.lineTo(300, 10);
    //obCanvas.moveTo(300, 10);
   // obCanvas.lineTo(300, 140); //И

    obCanvas.stroke();  //обводит фигуру линиями
}