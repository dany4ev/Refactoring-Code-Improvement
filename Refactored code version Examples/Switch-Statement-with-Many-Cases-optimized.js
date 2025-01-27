const employeeTypes = {
    admin: 'Administrator',
    manager: 'Manager',
    developer: 'Software Developer',
    tester: 'Software Tester',
    support: 'Support Specialist',
};

function getEmployeeType(employee) {
    return employeeTypes[employee.role] || 'Unknown';
}