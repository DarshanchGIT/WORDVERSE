import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Clock,
  BookmarkPlus,
  ArrowRight,
  Heart,
  Share,
  Copy,
} from "lucide-react";
import DOMPurify from "dompurify";
import NumberTicker from "../ui/number-ticker";
import { LikedButtonEffect } from "../ui/buttonEffect";
import { HandleVote } from "../../services/BlogServices";
import {
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import telegramIcon from "../../assets/telegramIcon.gif";
import whatsappIcon from "../../assets/whatsappIcon.gif";
import twitterIcon from "../../assets/twitterIcon.gif";
import pinterestIcon from "../../assets/pinterestIcon.gif";
import { shareURL } from "../../config/env";

interface BlogCardProps {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  _count: {
    upvotes: number;
  };
  date?: string;
  readTime?: string;
  category?: string;
}

export const BlogCard = ({
  id,
  title,
  content,
  author,
  date,
  readTime,
  category,
  _count,
}: BlogCardProps) => {
  const [copyText, setCopyText] = useState("Copy Link");

  const navigate = useNavigate();
  const [likes, setLikes] = useState(_count.upvotes || 0);
  const [liked, setLiked] = useState(false);

  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const sanitizedContent = DOMPurify.sanitize(content);

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
      HandleVote(id, newVoteType);
    } catch (error) {
      console.error("Confetti/Like button error:", error);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${shareURL}/blog?id=${id}`);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy Link"), 3000);
  };

  console.log(shareURL);

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors cursor-pointer">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="bg-gray-600 w-12 h-12 flex items-center justify-center text-white">
          <AvatarFallback className="text-xl font-bold text-gray-800">
            {getInitials(author.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center text-sm text-gray-400">
          <span className="font-medium text-gray-200">{author.name}</span>
          <span className="mx-2">·</span>
          <span>
            {date ||
              new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors">
          {title}
        </h2>
        <p
          className="text-gray-400 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></p>
        <span
          onClick={() => navigate(`/blog?id=${id}`)}
          className="text-indigo-400 flex items-center mt-2 cursor-pointer hover:text-indigo-600"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {readTime || "5 min"}
          </span>
          <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
            {category || "Technology"}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleConfettiClick}
            className={`flex items-center space-x-1 bg-none ${
              liked ? "text-red-500" : "text-gray-400"
            } hover:text-red-500  border-gray-600 border-2 rounded-full`}
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

          {/* <Button variant="ghost" size="icon" className="text-gray-400">
            <BookmarkPlus className="h-5 w-5" />
          </Button> */}

          {/* Share Button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="text-gray-400 hover:text-indigo-400 rounded-full transition-transform border-gray-700 border-2">
                <Share className="h-5 w-5" />
                <span className="text-white">Share</span>
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-50 p-3 bg-white/10 backdrop-blur-lg border-gray-600 border-2 rounded-full transform translate-y-2">
              <div className="flex space-x-3 justify-start items-center">
                <WhatsappShareButton url={shareURL} title={title}>
                  <img
                    src={whatsappIcon}
                    alt="WhatsApp"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </WhatsappShareButton>
                <TelegramShareButton url={shareURL} title={title}>
                  <img
                    src={telegramIcon}
                    alt="Telegram"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </TelegramShareButton>
                <TwitterShareButton url={shareURL} title={title}>
                  <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="w-7 h-7 rounded-full mx-auto hover:scale-110 transition-transform"
                  />
                </TwitterShareButton>
                <PinterestShareButton
                  url={shareURL}
                  media="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title={title}
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
    </div>
  );
};
