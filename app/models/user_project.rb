class UserProject < ActiveRecord::Base
  belongs_to :collaboration_project, class_name: "Project"
  belongs_to :collaborator, class_name: "User"

  enum permission: [:view, :edit]
end