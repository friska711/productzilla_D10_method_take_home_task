//1
function getNama() {
    return `friska`;
}
console.log(getNama())
//2
function tambah(nilai1,nilai2){
    return nilai1 + nilai2
}
var hasil = tambah(5,7);
console.log(hasil);
//3
function kurang(a, b){
    return a - b
}
var hasil = kurang(20,9);
console.log(hasil);
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
    return p * l * t ;
}
var hasil = VolumeBalok (5,7,8);
console.log(hasil);
//6
function bagi(a,b){
    return a / b
}
var hasil = bagi(81,9);
console.log(hasil);
//7
function RataRata ( x, y){
    return ( x + y) / 2;
}
var hasil = RataRata(89,9);
console.log(hasil);
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
    return a * b ;
}
var hasil = kali(120,130);
console.log(hasil);
//10
function pangkat(x,y){
    return x ** y;
}
var hasil = pangkat(2,8);
console.log(hasil);
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
    return s ** 2;
}
var hasil = luaspersegi (12);
console.log (hasil);
//15
function kelilingpersegi (s){
    return s * 4;
}
var hasil = kelilingpersegi (7);
console.log(hasil);
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
    return s ** 3;
}
var hasil = volumeKubus(9);
console.log(hasil);
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
    return (a * t) / 2 ;
}
var hasil = luasSegitiga ( 8, 10);
console.log(hasil);
