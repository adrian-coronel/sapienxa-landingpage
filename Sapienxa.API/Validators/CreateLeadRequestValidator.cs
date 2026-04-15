using FluentValidation;
using Sapienxa.API.DTOs;

namespace Sapienxa.API.Validators;

public class CreateLeadRequestValidator : AbstractValidator<CreateLeadRequest>
{
    public CreateLeadRequestValidator()
    {
        RuleFor(x => x.Nombre).NotEmpty().MinimumLength(2);
        RuleFor(x => x.Empresa).NotEmpty();
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Telefono).NotEmpty();
        RuleFor(x => x.Pais).NotEmpty();
        RuleFor(x => x.Mensaje).NotEmpty().MinimumLength(20);
    }
}
