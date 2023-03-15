//1
function greeting(name) {
    console.log(`hello`, name);
}
const nama= greeting(`itachi`)
//2
function tambah(nilai1,nilai2){
    console.log(nilai1 + nilai2)
}
var hasil = tambah(5,7);
//3
function kurang(a, b){
    console.log(a - b)
}
var hasil = kurang(20,9);
//4
function LulusSTAN( nilaiTWK,nilaiTKP,nilaiTIU){
    const lulus = nilaiTWK > 65 &&
                  nilaiTKP > 156 &&
                  nilaiTIU > 80
    return lulus;
}
const nilaiTWK = 70
      nilaiTKP = 160
      nilaiTIU = 81;
const kelulusan = LulusSTAN(nilaiTWK,nilaiTKP,nilaiTIU)
console.log(`Lulus`, kelulusan);
//5
function VolumeBalok(p,l,t){
    console.log( p * l * t);
}
var hasil = VolumeBalok (5,7,8);
//6
function bagi(a,b){
    console.log ( a/ b);
}
var hasil = bagi(81,9);
//7
function RataRata ( x, y){
    console.log (( x + y) / 2);
}
var hasil = RataRata(89,9);
//8
function hasilTOEFL( skorTOEFL){
    const hasil = skorTOEFL > 320
    return hasil;
}
const skorTOEFL = 310;
const berhasil = hasilTOEFL(skorTOEFL)
console.log(`nilai`, berhasil)
//9
function kali(a,b){
    console.log(a * b) ;
}
var hasil = kali(120,130);
//10
function pangkat(x,y){
    console.log(x ** y);
}
var hasil = pangkat(2,8);
//11
function  addName(){
    return `Levi`
}
console.log(addName());
//12
function fullname(){
    return `John Wick`;
}
console.log(fullname())
//13
let warna = `Blue`;
function getWarna() {
    return warna
}
console.log(getWarna())
//14
function luaspersegi(s){
    console.log(s ** 2) ;
}
var hasil = luaspersegi (12);
//15
function kelilingpersegi (s){
    console.log(s * 4);
}
var hasil = kelilingpersegi (7);
//16
function gender(){
    return `Male, Female`;
}
console.log (gender());
//17
function basicColor(){
    return`Merah, Biru`;
}
console.log (basicColor());
//18
function volumeKubus(s){
    console.log (s ** 3);
}
var hasil = volumeKubus(9);
//19
function Luluskelas( skorMTK,skorBiologi){
    const lulus = skorMTK > 80 ||
                  skorBiologi > 80 
    return lulus;
}
const skorMTK = 81
      skorBiologi = 80;
const keberhasilan = Luluskelas(skorMTK,skorBiologi)
console.log(`Lulus`, keberhasilan);
//20
function luasSegitiga( a, t){
    console.log ((a * t) / 2) ;
}
var hasil = luasSegitiga ( 8, 10);

