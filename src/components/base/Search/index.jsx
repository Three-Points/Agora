const search = `grid gap-y-6 grid-cols-1 md:grid-cols-6`
const search_input = `p-2
                    rounded-lg border-2 border-primary
                    outline-none
                    text-primary
                    col-span-2`

export default ({ handleSearch }) => (
    <div className={search}>
        <input
            className={search_input}
            type={'text'}
            placeholder="Search"
            onKeyUp={handleSearch}
        />
    </div>
)
