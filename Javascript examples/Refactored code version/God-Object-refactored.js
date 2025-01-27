class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        // Save user to database
    }
}

class EmailService {
    sendEmail(user) {
        // Send email to user
    }
}

class PasswordResetService {
    generateToken(user) {
        // Generate password reset token
    }
}