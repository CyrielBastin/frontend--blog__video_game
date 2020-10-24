import { NgForm } from '@angular/forms';

export class FormValidator
{
    public static isSignUpFormValid (form: NgForm): boolean
    {
        const username: string = form.value['username']
        const email: string = form.value['email']
        const password: string = form.value['password']

        if (username.length < 5 || username.length > 50) return false
        if (email.length > 100) return false
        if (password.length > 100) return false

        return true
    }
}
