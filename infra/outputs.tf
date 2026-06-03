output "public_ip" {
  value = aws_instance.main.public_ip
}

output "ssh_command" {
  value = "ssh -i ~/.ssh/polyglot-key ubuntu@${aws_instance.main.public_ip}"
}