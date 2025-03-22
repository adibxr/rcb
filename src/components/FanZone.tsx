
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  ImagePlus,
  Trash2,
  UserRound
} from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Fan post type definition
interface FanPost {
  id: string;
  userName: string;
  userImage: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: Date;
  liked: boolean;
}

// Form schema validation
const formSchema = z.object({
  content: z.string().min(1, "Post cannot be empty").max(280, "Post too long"),
  image: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const FanZone = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<FanPost[]>([
    {
      id: "1",
      userName: "Virat Fan",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=123",
      content: "What an amazing century by King Kohli today! 🔥 #RCB #PlayBold",
      image: "https://assets.bcci.tv/bcci/photos/7626/d0fef35a-d4b5-400d-b583-5eccfb136dce.jpg",
      likes: 145,
      comments: 12,
      timestamp: new Date(2023, 4, 12),
      liked: false
    },
    {
      id: "2",
      userName: "RCB Superfan",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=456",
      content: "At the stadium today! The atmosphere is electric! ❤️ #RCBvsMI",
      image: "https://assets.bcci.tv/bcci/photos/1036/ca1a7a1d-ad17-4dbe-a71c-6efccd61889e.jpg",
      likes: 89,
      comments: 5,
      timestamp: new Date(2023, 4, 14),
      liked: false
    },
    {
      id: "3",
      userName: "BangaloreBoy",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=789",
      content: "Can't wait for the next match! Who else is excited? 🏏 #PlayBold",
      likes: 42,
      comments: 7,
      timestamp: new Date(2023, 4, 15),
      liked: false
    }
  ]);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });
  
  const handleLike = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return { 
            ...post, 
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked 
          };
        }
        return post;
      })
    );
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        form.setValue("image", file);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const clearImage = () => {
    setImagePreview(null);
    form.setValue("image", undefined);
  };
  
  const onSubmit = (values: FormValues) => {
    // In a real app, we would send this to an API
    const newPost: FanPost = {
      id: Date.now().toString(),
      userName: "You",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=you",
      content: values.content,
      image: imagePreview || undefined,
      likes: 0,
      comments: 0,
      timestamp: new Date(),
      liked: false
    };
    
    setPosts(prevPosts => [newPost, ...prevPosts]);
    form.reset();
    setImagePreview(null);
    
    toast({
      title: "Post created!",
      description: "Your post has been shared with the RCB community.",
    });
  };
  
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    
    return date.toLocaleDateString();
  };
  
  return (
    <section id="fan-zone" className="section-container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-rcb-red uppercase tracking-wider mb-2 opacity-0 animate-fade-in">Join The Conversation</p>
        <h2 className="section-heading opacity-0 animate-fade-in-delay-1">RCB Fan Zone</h2>
        <p className="section-subheading opacity-0 animate-fade-in-delay-2">Connect with fellow fans, share your moments and show your support for the team.</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {/* Post creation form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-10 bg-white dark:bg-rcb-darkgray rounded-xl p-6 shadow-lg">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Share with the RCB community</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What's on your mind about RCB?"
                      className="resize-none h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Image preview */}
            {imagePreview && (
              <div className="relative mt-4">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="rounded-lg max-h-60 max-w-full object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full h-8 w-8"
                  onClick={clearImage}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4">
              <div>
                <Label htmlFor="image-upload" className="cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <ImagePlus className="h-5 w-5 text-rcb-red" />
                  <span>Add Photo</span>
                </Label>
                <Input 
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-rcb-red hover:bg-rcb-red/90 text-white rounded-full px-6"
              >
                Post <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
        
        {/* Posts feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white dark:bg-rcb-darkgray rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img 
                      src={post.userImage} 
                      alt={post.userName} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{post.userName}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(post.timestamp)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
                    
                    {post.image && (
                      <div className="mt-3 rounded-lg overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Post image" 
                          className="w-full h-auto max-h-96 object-cover"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 flex items-center space-x-6 border-t dark:border-gray-700 pt-4">
                    <button 
                      className={`flex items-center space-x-1 text-sm ${post.liked ? 'text-rcb-red' : 'text-gray-500 dark:text-gray-400'}`}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`h-5 w-5 ${post.liked ? 'fill-rcb-red text-rcb-red' : ''}`} />
                      <span>{post.likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanZone;
