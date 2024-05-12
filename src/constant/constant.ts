export const professionData = [
    {
        label: "Front-end Devloper",
        value: "Front-end"
    },
    {
        label: "Back-end Devlpoer",
        value: "Back-end"
    },
    {
        label: "full-stack developern",
        value: "full-stack"
    },
]
export const interestsData = [
    {
        label: "Sports",
        value: "sports"
    },
    {
        label: "Music",
        value: "music"
    },
    {
        label: "Movies",
        value: "movies"
    },
]
export const itemsPerPageData = [
    {
        label: "5",
        value: 5
    },
    {
        label: "10",
        value: 10
    },
    {
        label: "20",
        value: 20
    },
]
export const todoOptionData = [
    {
        label: "Todo",
        value: "Todo"
    },
    {
        label: "Done",
        value: "Done"
    },
]
export const customStyles = {
    control: (provided: any) => ({
        ...provided,
        backgroundColor: 'transpart',
        color: '#aeaeae',
        borderColor: "unset !important",
        boxShadow: "unset !important"
    }),
    option: (provided: any) => ({
        ...provided,
        backgroundColor: '#2c2c2c',
        color: '#aeaeae',
    }),
    singleValue: (provided: any) => ({
        ...provided,
        color: '#aeaeae',
    }),
};