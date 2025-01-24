const categorySchema = ["name", "description"]

const bidSchema = ["auction", "bidder", "bidAmount", "bidTime", "isWinner", "isFlagged"]

const feedbackSchema = ["auction", "reviewer", "reviewText", "rating"]

const productSchema = ["productName", "category", "seller", "productImages", "productDetail", "status", "adminApproval", "reviewNote"]

const profileSchema = ["fullName", "phone", "gender", "address"]

const auctionSchema = ["product", "seller", "timeZone", "auctionStart", "auctionEnd", "startPrice", "threshold", "currentHighest", "minBidIncrement", "status", "isFlagged", "isDeleted"]

const userSchema = ["email", "password", "role", "profile", "isVerified", "isActive"]
