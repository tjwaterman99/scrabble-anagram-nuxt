import { get } from '@tomwaterman/scrabble-anagram-lib'

export default defineEventHandler(async (event) => {
    const word = getRouterParam(event, 'word')?.toLowerCase()
    if (!word) {
        throw createError({
            statusCode: 404,
            message: `Missing route parameter`
        })
    }
    let res = get(word)
    if (!res) {
        throw createError({
            statusCode: 404,
            message: `No word found for ${word}`
        })
    }  
    return res
})
