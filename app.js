let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#ffbb00';
///////////////////////////////////////////////////////////////////////


let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
let btn18 = document.getElementById("btn18");
let btn19 = document.getElementById("btn19");
let btn20 = document.getElementById("btn20");
let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");
let btn27 = document.getElementById("btn27");
let btn28 = document.getElementById("btn28");
let btn29 = document.getElementById("btn29");
let btn30 = document.getElementById("btn30");
let btn31 = document.getElementById("btn31");
let btn32 = document.getElementById("btn32");
let btn33 = document.getElementById("btn33");
let btn34 = document.getElementById("btn34");
let btn35 = document.getElementById("btn35");
let btn36 = document.getElementById("btn36");
let btn37 = document.getElementById("btn37");
let btn38 = document.getElementById("btn38");
let btn39 = document.getElementById("btn39");
let btn40 = document.getElementById("btn40");
let btn41 = document.getElementById("btn41");
let btn42 = document.getElementById("btn42");
let btn43 = document.getElementById("btn43");
let btn44 = document.getElementById("btn44");
let btn45 = document.getElementById("btn45");
let btn46 = document.getElementById("btn46");
let btn47 = document.getElementById("btn47");
let btn48 = document.getElementById("btn48");
let btn49 = document.getElementById("btn49");
let btn50 = document.getElementById("btn50");
let btn51 = document.getElementById("btn51");
let btn52 = document.getElementById("btn52");
let btn53 = document.getElementById("btn53");
let btn54 = document.getElementById("btn54");
let btn55 = document.getElementById("btn55");
let btn56 = document.getElementById("btn56");
let btn57 = document.getElementById("btn57");
let btn58 = document.getElementById("btn58");
let btn59 = document.getElementById("btn59");
let btn60 = document.getElementById("btn60");
let btn61 = document.getElementById("btn61");
let btn62 = document.getElementById("btn62");
let btn63 = document.getElementById("btn63");
let btn64 = document.getElementById("btn64");
let btn65 = document.getElementById("btn65");
let btn66 = document.getElementById("btn66");
let btn67 = document.getElementById("btn67");
let btn68 = document.getElementById("btn68");
let btn69 = document.getElementById("btn69");
let btn70 = document.getElementById("btn70");
let btn71 = document.getElementById("btn71");
let btn72 = document.getElementById("btn72");
let btn73 = document.getElementById("btn73");
let btn74 = document.getElementById("btn74");
let btn75 = document.getElementById("btn75");
let btn76 = document.getElementById("btn76");
let btn77 = document.getElementById("btn77");
let btn78 = document.getElementById("btn78");
let btn79 = document.getElementById("btn79");
let btn80 = document.getElementById("btn80");
let btn81 = document.getElementById("btn81");
let btn82 = document.getElementById("btn82");
let btn83 = document.getElementById("btn83");
let btn84 = document.getElementById("btn84");
let btn85 = document.getElementById("btn85");
let btn86 = document.getElementById("btn86");
let btn87 = document.getElementById("btn87");
let btn88 = document.getElementById("btn88");
let btn89 = document.getElementById("btn89");
let btn90 = document.getElementById("btn90");
let btn91 = document.getElementById("btn91");
let btn92 = document.getElementById("btn92");


// Получаем все кнопки с классом addButton
let buttons = document.querySelectorAll(".addButton");

// Проходим по каждой кнопке и назначаем обработчик события click
buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        // Создаем текст для отображения в tg.MainButton
        let text = "Ви обрали " + (index + 1) + "!";

        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setText(text);
            item = (index + 1).toString(); // Индекс начинается с 0, поэтому добавляем 1
            tg.MainButton.show();
        }
    });
});

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Гамбургер");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чізбургер");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Дабл Чізбургер");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Біг Мак");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Дабл Біг Мак");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МакЧікен");
		item = "6";
		tg.MainButton.show();
	}
});

btn7.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Біг Тейсті");
		item = "7";
		tg.MainButton.show();
	}
});

btn8.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Філе-о-фіш");
		item = "8";
		tg.MainButton.show();
	}
});

btn9.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Роял Чізбургер");
		item = "9";
		tg.MainButton.show();
	}
});

btn10.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Дабл Роял Чізбургер");
		item = "10";
		tg.MainButton.show();
	}
});

btn11.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Біг Біф Чіз");
		item = "11";
		tg.MainButton.show();
	}
});

btn12.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МакТост із сиром");
		item = "12";
		tg.MainButton.show();
	}
});

btn13.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чікен Рол");
		item = "13";
		tg.MainButton.show();
	}
});

btn14.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Фіш Рол");
		item = "14";
		tg.MainButton.show();
	}
});

btn15.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Картопля Фрі Велика");
		item = "15";
		tg.MainButton.show();
	}
});

btn16.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Картопля Фрі Середня");
		item = "16";
		tg.MainButton.show();
	}
});

btn17.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Картопля Фрі Маленька");
		item = "17";
		tg.MainButton.show();
	}
});

btn18.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Картопляні Діпи");
		item = "18";
		tg.MainButton.show();
	}
});

btn19.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чікен МакНагетс, 4шт");
		item = "19";
		tg.MainButton.show();
	}
});

btn20.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чікен МакНагетс, 6шт");
		item = "20";
		tg.MainButton.show();
	}
});

btn21.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чікен МакНагетс, 9шт");
		item = "21";
		tg.MainButton.show();
	}
});

btn22.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Чікен МакНагетс, 20шт");
		item = "22";
		tg.MainButton.show();
	}
});

btn23.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Курячі Стріпси, 3шт");
		item = "23";
		tg.MainButton.show();
	}
});

btn24.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Курячі Стріпси, 6шт");
		item = "24";
		tg.MainButton.show();
	}
});

btn25.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Курячі Стріпси, 12шт");
		item = "25";
		tg.MainButton.show();
	}
});

btn26.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Стріпси Чікен Бокс");
		item = "26";
		tg.MainButton.show();
	}
});

btn27.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Хрусткі курячі крильця 4шт");
		item = "27";
		tg.MainButton.show();
	}
});

btn28.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Хрусткі курячі крильця 6шт");
		item = "28";
		tg.MainButton.show();
	}
});

btn29.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Хрусткі курячі крильця 10шт");
		item = "29";
		tg.MainButton.show();
	}
});

btn30.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Крила Чікен Бокс");
		item = "30";
		tg.MainButton.show();
	}
});

btn31.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Мікс Чікен Бокс");
		item = "31";
		tg.MainButton.show();
	}
});

btn32.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Хабанеро");
		item = "32";
		tg.MainButton.show();
	}
});

btn33.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус із сиром Дорблю");
		item = "33";
		tg.MainButton.show();
	}
});

btn34.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус кисло-солодкий<");
		item = "34";
		tg.MainButton.show();
	}
});

btn35.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Барбекю");
		item = "35";
		tg.MainButton.show();
	}
});

btn36.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кетчуп");
		item = "36";
		tg.MainButton.show();
	}
});

btn37.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Майонез");
		item = "37";
		tg.MainButton.show();
	}
});

btn38.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Гірчичний");
		item = "38";
		tg.MainButton.show();
	}
});

btn39.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Карі");
		item = "39";
		tg.MainButton.show();
	}
});

btn40.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Сирний");
		item = "40";
		tg.MainButton.show();
	}
});

btn41.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Соус Журавлиновий");
		item = "41";
		tg.MainButton.show();
	}
});

btn42.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Мед");
		item = "42";
		tg.MainButton.show();
	}
});

btn43.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Сироп Ірландський крем");
		item = "43";
		tg.MainButton.show();
	}
});

btn44.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Сироп Смажений лісовий горіх");
		item = "44";
		tg.MainButton.show();
	}
});

btn45.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Міні донати з шоколадом");
		item = "45";
		tg.MainButton.show();
	}
});

btn46.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МакПиріг Крем-Чорниця");
		item = "46";
		tg.MainButton.show();
	}
});

btn47.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Морозиво ріжок");
		item = "47";
		tg.MainButton.show();
	}
});

btn48.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Шоколад у пластиковому стаканчику");
		item = "48";
		tg.MainButton.show();
	}
});
btn49.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Карамель у пластиковому стаканчику");
		item = "49";
		tg.MainButton.show();
	}
});

btn50.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Полуниця у пластиковому стаканчику");
		item = "50";
		tg.MainButton.show();
	}
});

btn51.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Шоколад у вафельному стаканчику");
		item = "51";
		tg.MainButton.show();
	}
});

btn52.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Карамель у вафельному стаканчику");
		item = "52";
		tg.MainButton.show();
	}
});

btn53.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКСАНДІ Полуниця у вафельному стаканчику");
		item = "53";
		tg.MainButton.show();
	}
});

btn54.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКФЛУРІ КІТ КАТ Шоколад");
		item = "54";
		tg.MainButton.show();
	}
});

btn55.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКФЛУРІ КІТ КАТ Карамель");
		item = "55";
		tg.MainButton.show();
	}
});

btn56.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКФЛУРІ КІТ КАТ Полуниця");
		item = "56";
		tg.MainButton.show();
	}
});

btn57.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКШЕЙК Шоколад");
		item = "57";
		tg.MainButton.show();
	}
});

btn58.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКШЕЙК Ваніль");
		item = "58";
		tg.MainButton.show();
	}
});

btn59.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МАКШЕЙК Полуниця");
		item = "59";
		tg.MainButton.show();
	}
});

btn60.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали МакПиріг вишневий");
		item = "60";
		tg.MainButton.show();
	}
});

btn61.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Круасан мигдалевий");
		item = "61";
		tg.MainButton.show();
	}
});

btn62.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Круасан з крем-какао");
		item = "62";
		tg.MainButton.show();
	}
});

btn63.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кока-Кола Велика");
		item = "63";
		tg.MainButton.show();
	}
});

btn64.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кока-Кола  Середня");
		item = "64";
		tg.MainButton.show();
	}
});

btn65.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кока-Кола Мала");
		item = "65";
		tg.MainButton.show();
	}
});

btn66.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Фанта Велика");
		item = "66";
		tg.MainButton.show();
	}
});

btn67.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Фанта Середня");
		item = "67";
		tg.MainButton.show();
	}
});

btn68.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Фанта Мала");
		item = "68";
		tg.MainButton.show();
	}
});

btn69.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Спрайт Великий");
		item = "69";
		tg.MainButton.show();
	}
});

btn70.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Спрайт Середній");
		item = "70";
		tg.MainButton.show();
	}
});

btn71.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Спрайт Малий");
		item = "71";
		tg.MainButton.show();
	}
});

btn72.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали ВОДА НЕГАЗОВАНА Велика");
		item = "72";
		tg.MainButton.show();
	}
});

btn73.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали ВОДА НЕГАЗОВАНА Мала");
		item = "73";
		tg.MainButton.show();
	}
});

btn74.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали ВОДА ГАЗОВАНА Велика");
		item = "74";
		tg.MainButton.show();
	}
});

btn75.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали ВОДА ГАЗОВАНА Мала");
		item = "75";
		tg.MainButton.show();
	}
});

btn76.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Апельсиновий сік Великий");
		item = "76";
		tg.MainButton.show();
	}
});

btn77.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Апельсиновий сік Маленький");
		item = "77";
		tg.MainButton.show();
	}
});

btn78.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Сік Галіція яблучний");
		item = "78";
		tg.MainButton.show();
	}
});

btn79.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Сік Галіція яблучно-грушевий");
		item = "79";
		tg.MainButton.show();
	}
});

btn80.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Еспресо");
		item = "80";
		tg.MainButton.show();
	}
});

btn81.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава подвійне еспресо");
		item = "81";
		tg.MainButton.show();
	}
});

btn82.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Американо маленька");
		item = "82";
		tg.MainButton.show();
	}
});

btn83.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Американо з молоком маленька");
		item = "83";
		tg.MainButton.show();
	}
});

btn84.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Капучино маленька");
		item = "84";
		tg.MainButton.show();
	}
});

btn85.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Лате маленька");
		item = "85";
		tg.MainButton.show();
	}
});

btn86.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Американо класік");
		item = "86";
		tg.MainButton.show();
	}
});

btn87.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Американо з  молоком класік");
		item = "87";
		tg.MainButton.show();
	}
});

btn88.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Капучино класік");
		item = "88";
		tg.MainButton.show();
	}
});

btn89.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Лате класік");
		item = "89";
		tg.MainButton.show();
	}
});

btn90.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Кава Флет Вайт");
		item = "90";
		tg.MainButton.show();
	}
});

btn91.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Мокко класік");
		item = "91";
		tg.MainButton.show();
	}
});

btn92.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Ви обрали Лате Брауні");
		item = "92";
		tg.MainButton.show();
	}
});


// КНОПКИ КОЛИЧЕСТВА
///////////////////////////////////////////////////////////////////////
// Находим все кнопки minusBtn и plusBtn
let minusBtns = document.querySelectorAll('.minus-btn');
let plusBtns = document.querySelectorAll('.plus-btn');
let quantityDisplays = document.querySelectorAll('.quantity');
let addButton = document.querySelectorAll('.addButton');
let priceDisplays = document.querySelectorAll('.price');

// Функция для обновления количества товара
function updateQuantity(increment, index) {
    let quantity = parseInt(quantityDisplays[index].innerText);
    if (increment) {
        quantity++;
    } else {
        if (quantity > 0) {
            quantity--;
        }
    }
    quantityDisplays[index].innerText = quantity;
    updateTotalPrice(index);
}

// Функция для обновления цены
function updateTotalPrice(index) {
    let quantity = parseInt(quantityDisplays[index].innerText);
    let initialPrice = parseFloat(document.querySelectorAll('.item')[index].getAttribute('data-initial-price'));
    let totalPrice;
    if (quantity > 0) { // Если количество больше 0, используем обычный расчет цены
        totalPrice = quantity * initialPrice;
    } else { // Если количество равно 0, используем начальную цену
        totalPrice = initialPrice;
    }
    priceDisplays[index].innerText = totalPrice.toFixed(2) + " грн";
}

// Присваиваем обработчики событий для всех кнопок минус и плюс
for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", function() {
        updateQuantity(false, i);
    });

    plusBtns[i].addEventListener("click", function() {
        updateQuantity(true, i);
    });

    addButton[i].addEventListener("click", function() {
        updateTotalPrice(i);
    });
}

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

///////////////////////////////////////////////////////////////////////


/* //////////////////КНОПКА ДОБАВИТЬ///////////////////*/





/* //////////////////КНОПКА ДОБАВИТЬ///////////////////*/




function loadFoodItems(foodType) {
    const items = foodItems[foodType];
    items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = "";
        img.classList.add('img');
        itemContainer.appendChild(img);

        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('quantity-container');
        const minusBtn = document.createElement('button');
        minusBtn.classList.add('minus-btn');
        minusBtn.innerText = "-";
        quantityContainer.appendChild(minusBtn);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.classList.add('quantity');
        quantityDisplay.innerText = "0";
        quantityContainer.appendChild(quantityDisplay);

        const plusBtn = document.createElement('button');
        plusBtn.classList.add('plus-btn');
        plusBtn.innerText = "+";
        quantityContainer.appendChild(plusBtn);

        itemContainer.appendChild(quantityContainer);

        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = "Add";
        itemContainer.appendChild(btn);

        document.querySelector('.container .inner').appendChild(itemContainer);

        btn.addEventListener('click', function() {
            console.log(`Added ${item.name} to cart`); // Placeholder for adding logic to add item to cart
        });
    });
}


















///////////////////////////////////////////////////////////////////////
let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);


