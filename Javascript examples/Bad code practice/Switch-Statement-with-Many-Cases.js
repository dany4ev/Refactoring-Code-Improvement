function getEmployeeType(employee) {
    switch (employee.role) {
        case 'admin':
            return 'Administrator';
        case 'manager':
            return 'Manager';
        case 'developer':
            return 'Software Developer';
        case 'tester':
            return 'Software Tester';
        case 'support':
            return 'Support Specialist';
        default:
            return 'Unknown';
    }
}