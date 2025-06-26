/**
 * @swagger
 * /boards:
 *   get:
 *     summary: 게시글 가져오기
 *     tags: [Board]
 *     parameters:
 *          - in: query
 *            name: number
 *            type: int
 *     response:
 *       200:
 *         description: 성공
 *         content:
 *           application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                      properties:
 *                          number:
 *                              type: int
 *                              example: 3
 *                          writer:
 *                               type: string
 *                               example: 철수
 *                          contents:
 *                               type: string
 *                               example: 철수는 학교에 갔습니다..
 */

/**
 * @swagger
 * /boards:
 *   post:
 *     summary: 게시글 등록하기
 *     tags: [Board]
 *     responses:
 *          200:
 *              description: 성공
 */