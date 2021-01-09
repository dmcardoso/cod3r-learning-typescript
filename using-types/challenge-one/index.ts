const employee: {
    supervisors: string[],
    schedule: (hours: number) => string
} = {
    supervisors: ['Daniel', 'Maria'],
    schedule(hours) {
        return hours <= 8 ? 'Ok' : 'Not ok'
    }
}