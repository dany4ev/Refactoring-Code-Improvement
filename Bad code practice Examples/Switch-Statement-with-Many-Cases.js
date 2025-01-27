function getEmployeeType(employee) {
    switch (employee.role) {
        case 'admin':
            return 'Administrator';
        case 'anager':
            return 'Manager';
        case 'developer':
            return 'Software Developer';
        case 'tester':
            return 'Software Tester';
        case 'upport':
            return 'Support Specialist';
        default:
            return 'Unknown';
    }
}