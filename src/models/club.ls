# require! ['mongoose']

# schema = new mongoose.Schema {
#   "id" : String,
#   "name" : String,
#   "logo" : "...",
#   "description" : "....",
#   "more_detail" : {}, 
#   "managers" : [ 
#   {
#     "m_name" : "..."
#     "pwd" : "..." 
#   }
#   ],
#   "activity" : [
#     {
#       "act_id" : "..."
#     }
#   ]
# }

# # schema.virtual 'name' .get ->
# #   name = "#{@firstName or ' '} #{@lastName or ' '}"

# module.exports = mongoose.model 'Club', schema