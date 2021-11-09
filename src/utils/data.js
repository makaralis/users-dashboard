export const cardsData = [
    {
        title: '13,346',
        subTitle: 'Acquired Users'
    },
    {
        title: '40%',
        subTitle: 'ROI'
    },
    {
        title: '1,346',
        subTitle: 'Subscriptions'
    },
    {
        title: '76%',
        subTitle: 'Communications Open Rate'
    },
]


export const usersDataTheads = ['#', 'Brand', 'Start Date', 'End Date', 'Status', 'Assign']

export const usersData = [
    ['Vichy', '12/05/2021', '12/08/2021', 'Active', 'Justin Botosh'],
    ['Lancome', '12/04/2021', '12/06/2021', 'In Review', 'Leo Stanton'],
    ['La Roche-Posay', '12/09/2021', '12/12/2021', 'In Review', 'Mira Korsgaard'],
]

usersData.forEach((row, index) => row.unshift(index+1))