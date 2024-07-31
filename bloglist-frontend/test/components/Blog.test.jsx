import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from '../../src/components/Blog';
import Likes from '../../src/components/Likes';

test('renders content', () => {
    const blog = {
        title: 'test title with react-testing-library',
        author: 'some author',
        likes: 100,
        url: 'http://test.com'
    }

    const { container } = render(<Blog blog={blog} />)

    const div = container.querySelector('.blog')

    screen.debug(div)
    
    expect(div).toHaveTextContent('test title with react-testing-library')
})

test('clicking the button calls event handler once', async () => {
    const blog = {
        title: 'testing event handler',
        author: 'some author',
        likes: 101,
        url: 'http://test.com'
    }

    const mockHandler = vi.fn()

    render(
        <Likes blog={blog} />
    )

    const user = userEvent.setup()
    const button = screen.getByText('like')
    button.onclick = mockHandler
    await user.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
})