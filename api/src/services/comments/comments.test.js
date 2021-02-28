import { comments } from './comments'

scenario(
  'returns all comments for a single post from the database',
  async (scenario) => {
    const result = await comments({ postId: scenario.comment.jane.postId })
    expect(result.length).toEqual(1)
  }
)
