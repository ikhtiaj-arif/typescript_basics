// class BankAccount {
//     public id: number;
//     public name: string;
//     private balance: number;
//     // protected balance: number;

//     constructor(id: number, name:string, balance:number){
//         this.id = id
//         this.name = name
//         this.balance = balance
//     }   

//     // getter
//     get mybalance():number {
//         return this.balance
//     }
// //setter
//     set deposit(amount:number) {
//         this.balance = this.balance + amount
//     }



//     getBalance():number {
//         return this.balance
//     //    console.log(`balance ${this.balance}`);
//     }
//     addDeposit(amount:number){
//         this.balance = this.balance + amount
//     }
// }


// class studentAccount extends BankAccount{
//     test(){
//         // this.
//     }
// }


// const myAccount = new BankAccount(444, "Arif", 20)

// console.log(myAccount.mybalance);
// myAccount.deposit = 1000;
// console.log("new",myAccount.mybalance);