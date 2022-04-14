function greeter(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greeter("Maddison", new Date());

export default greeter
