# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "aprendereconomia.github.io"
  spec.version       = "0.1.0"
  spec.authors       = ["José Tobias"]
  spec.email         = ["jose.tobias@outlook.com"]

  spec.summary       = "A platform for learning and practicing economy."
  spec.homepage      = "https://aprendereconomia.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "wdm", ">= 0.1.0"

  spec.add_development_dependency "bundler", "~> 2.1"
  spec.add_development_dependency "rake", "~> 13.0"
end
