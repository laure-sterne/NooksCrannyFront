const UsingFetch = () => {
    fetch("http://localhost:4000/meubles")
    .then(res => res.json())
    console.log(res.json())
}