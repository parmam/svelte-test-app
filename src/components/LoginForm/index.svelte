<script>
    const handleSubmit = e => {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
        }
        console.log(data)
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" name="username" placeholder="username">
    <input type="password" name="password" placeholder="password">
    <button type="submit">Login</button>
</form>


<style>
    form{
        width: 300px;
        height: 500px;
        background: rgba(226, 219, 219, 0.788);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(0.1, 0, 0.1, 0.3);
    }

    input {
        margin: 10px 0;
        height: 40px;
        border-radius: 8px;
        padding: 0 10px;
    }
    button {
        height: 40px;
        margin: 30px 0 0 0;
        border-radius: 8px;
    }
</style>