import { useState } from "react";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  CalendarDays,
  Clock,
  Heart,
  Share,
  Copy,
  BookmarkPlus,
} from "lucide-react";
import DOMPurify from "dompurify";
import { LikedButtonEffect } from "../../ui/buttonEffect";
import { HandleVote } from "../../../services/BlogServices";
import {
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import telegramIcon from "../../../assets/telegramIcon.gif";
import whatsappIcon from "../../../assets/whatsappIcon.gif";
import twitterIcon from "../../../assets/twitterIcon.gif";
import pinterestIcon from "../../../assets/pinterestIcon.gif";
import NumberTicker from "../../ui/number-ticker";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  date?: string;
  readTime?: string;
  category?: string;
  _count: {
    upvotes: number;
  };
}

interface PostCardProps {
  blog: Blog;
}

export const PostCard = ({ blog }: PostCardProps) => {
  const [likes, setLikes] = useState(blog._count.upvotes || 0);
  const [liked, setLiked] = useState(false);
  const [copyText, setCopyText] = useState("Copy Link");

  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const sanitizedContent = DOMPurify.sanitize(blog.content);

  const handleConfettiClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      const newVoteType = liked ? "downvote" : "upvote";
      if (!liked) {
        LikedButtonEffect(event);
        setLikes((prevLikes: number) => prevLikes + 1);
        setLiked(true);
      } else {
        setLikes((prevLikes: number) => prevLikes - 1);
        setLiked(false);
      }
      HandleVote(blog.id.toString(), newVoteType);
    } catch (error) {
      console.error("Like button error:", error);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://yourwebsite.com/blog?id=${blog.id}`);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy Link"), 3000);
  };

  const formattedDate = new Date(blog.date || Date.now()).toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const shareUrl = `https://yourwebsite.com/blog?id=${blog.id}`;

  return (
    <article className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      {/* Author info and metadata */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Avatar className="bg-gray-600 w-12 h-12 flex items-center justify-center text-white">
            <AvatarFallback className="text-xl font-bold text-gray-800">
              {getInitials(blog.author.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-lg text-white">
                {blog.author.name}
              </h3>
              <span className="text-gray-400">·</span>
              <button className="text-indigo-400 hover:text-indigo-300 text-sm">
                Follow
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
              <span className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime || "5 min"}
              </span>
            </div>
          </div>
        </div>

        {/* Like and Share Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={handleConfettiClick}
            className={`flex items-center space-x-1 bg-none ${
              liked ? "text-red-500" : "text-gray-400"
            } hover:text-red-500 rounded-full border-gray-700 border-2`}
          >
            {!liked ? (
              <Heart className="h-5 w-5" />
            ) : (
              <Heart className="h-5 w-5" fill="#F44336" />
            )}
            <NumberTicker
              value={likes ? likes : 0}
              direction="up"
              decimalPlaces={0}
              className="text-gray-400"
            />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button className="text-gray-400 hover:text-indigo-400 rounded-full transition-transform border-gray-700 border-2">
                <Share className="h-5 w-5" />
                <span className="text-white">Share</span>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-50 p-3 bg-white/10 backdrop-blur-lg border-gray-600 border-2 rounded-full transform translate-y-2">
              <div className="flex space-x-3 justify-start items-center">
                <WhatsappShareButton url={shareUrl} title={blog.title}>
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl} title={blog.title}>
                  <img
                    src={telegramIcon}
                    alt="Telegram"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </TelegramShareButton>
                <TwitterShareButton url={shareUrl} title={blog.title}>
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </TwitterShareButton>
                <PinterestShareButton
                  url={shareUrl}
                  media="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title={blog.title}
                >
                  <img
                    src={pinterestIcon}
                    alt="Pinterest"
                    className="w-7 h-7 mx-auto hover:scale-110 transition-transform"
                  />
                </PinterestShareButton>

                <Button
                  size="icon"
                  onClick={handleCopyLink}
                  className="hover:scale-110 transform-none"
                >
                  <Copy className="h-7 w-7 mx-auto text-white hover:text-black" />
                </Button>
                <span className="text-gray-400 text-xs font-semibold">
                  {copyText}
                </span>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 border-gray-600 border-2 rounded-full"
          >
            <BookmarkPlus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Title and Content in White Block */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
          {blog.title}
        </h1>
        <div
          className="prose max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </div>

      {/* Author bio (outside the white block) */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="flex items-start space-x-4">
          <div>
            <h3 className="font-medium text-lg text-white mb-2">
              Written by {blog.author.name}
            </h3>
            <p className="text-gray-400">THIS_IS_A_SAMPLE_BIO_OF_AUTHOR</p>
          </div>
        </div>
      </div>
    </article>
  );
};
