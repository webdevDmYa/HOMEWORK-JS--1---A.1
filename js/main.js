
const rate1 = 0.1; //ставка 10 % если доход от 0 до 9950
const rate2 = 0.12; //ставка 12 % если доход от 9951 до  40125
const rate3 = 0.22; //ствака 22 % если доход от 40526 до 86375
const rate4 = 0.24; //ствака 24 % если доходо от 86 376 до 164 925
const rate5 = 0.32; //ставка 32 % если доход от 164 926 до 209 425
const rate6 = 0.35; //ставка 35 % если доход от 209426 до 523600
const rate7 = 0.37; //ставка 37 % есил доход от 523600 и больше
const helpUsa = 12550; //сумма покрывающая налогооблажение  в размере 12550

function taxRate() {

	let youIncome = inSum.value;// ваш доход
	let youTax;// налог !
	let income;// доход с учетом помощи от государства
	income = youIncome - helpUsa;
	if (income <= 0) {
		youTax = 0;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 0 && income <= 9950) {
		youTax = income * rate1;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 9951 && income <= 40525) {
		youTax = (rate2 * (income - 9950)) + 995;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 40526 && income <= 86375) {
		youTax = (rate3 * (income - 40525)) + 4664;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 86376 && income <= 164925) {
		youTax = (rate4 * (income - 86375)) + 14751;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 164926 && income <= 209425) {
		youTax = (rate5 * (income - 164925)) + 33603;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income >= 209426 && income <= 523600) {
		youTax = (rate6 * (income - 209425)) + 47843;
		console.log(`Ваш налог ${youTax} $`);
	} else if (income > 523600) {
		youTax = (rate7 * (income - 523600)) + 157804.25;
		console.log(`Ваш налог ${youTax} $`);
	} else {
		alert('Нажмите F5 для повтора)))!');
	}
	youTax = youTax.toFixed(2);
	result.innerHTML = `<h2 style="padding:10px;">${youTax} $</h2>`;
}













