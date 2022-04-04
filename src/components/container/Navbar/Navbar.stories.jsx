import { MemoryRouter } from 'react-router-dom'
import Navbar from '.'

export default {
    title: 'Components/Containers/Navbar',
    component: Navbar,
}

export const Default = () => (
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
)
