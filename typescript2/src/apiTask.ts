import {z} from 'zod';

const url = 'https://jsonplaceholder.typicode.com/posts';

const postSchema = z.object({
      userId: z.number(),
      id: z.number(),
      title: z.string(),
      body: z.string()
});

type Post = z.infer<typeof postSchema>;


async function fetchPost(link:string):Promise<Post[]>{

      try {
            const response = await fetch(link);
      if(!response.ok){
            throw new Error(`response status: ${response.status}`)
      };

      const rawData = await response.json();
      
      // checking the data if it conforms with the schema at runtime 

      const result = postSchema.array().safeParse(rawData)
      if(!result.success){
            throw new Error(`invalid data: ${result.error}`)
      };

      return result.data;

      } catch (error) {
          error instanceof Error? console.log (error.message): console.log('there was an error')
           return []  
      }
};


const posts = await fetchPost(url);
export default posts