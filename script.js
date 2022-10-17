function checkPassword(form) {
    let password1 = form.password.value
    let password2 = form.confirmpassword.value

    if (password1 !== password2) {
        alert("Passwords do not match")
    }
}