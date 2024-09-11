export interface UserDto {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export function isUserDTOValid(user: UserDto): boolean {
    return Object.values(user).every(value => typeof value === 'string' && value.trim() !== '');
}