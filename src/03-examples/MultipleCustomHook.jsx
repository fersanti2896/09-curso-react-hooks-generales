import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHook = () => {
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes');

    console.log({data, isLoading, hasError});

    return (
        <h1>Dr House</h1>
    )
}
