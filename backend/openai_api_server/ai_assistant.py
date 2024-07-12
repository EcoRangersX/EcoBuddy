from dotenv import load_dotenv
from openai import AsyncOpenAI
from constants import role_instructions
import os
import asyncio
import time

load_dotenv()

client = AsyncOpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
    project=os.environ.get("OPENAI_PROJECT_ID"),
)


async def generate_answer(prompt: str) -> str:
    response = await client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": role_instructions},
            {"role": "user", "content": prompt},
        ],
    )

    return response.choices[0].message.content


async def main():
    user_prompt = "What is Python?"

    start_time = time.time()

    tasks = [generate_answer(prompt=user_prompt) for _ in range(50)]
    responses = await asyncio.gather(*tasks)

    end_time = time.time()

    for response in responses:
        print(response)

    print(f"Execution time of 50 requests: {end_time - start_time} seconds")


if __name__ == "__main__":
    asyncio.run(main())
